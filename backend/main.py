from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import random
import uuid
import logging
from queue import Queue
from datetime import datetime

app = FastAPI()

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

# Queue to manage incoming game start requests
request_queue = Queue()

class GameStartResponse(BaseModel):
    computer_numbers: list[int]
    game_id: str
    timestamp: str

@app.post("/start-game", response_model=GameStartResponse)
async def start_game():
    # Add request to the queue
    request_queue.put("start_game_request")

    # Process the request
    if not request_queue.empty():
        request_queue.get()

        try:
            # Generate computer's numbers
            computer_numbers = random.sample(range(10), 3)

            # Generate unique game ID
            game_id = str(uuid.uuid4())

            # Get current timestamp
            timestamp = datetime.now().isoformat()

            # Log the game start request
            logging.info(f"Game started with ID: {game_id}, Computer numbers: {computer_numbers}")

            return GameStartResponse(
                computer_numbers=computer_numbers,
                game_id=game_id,
                timestamp=timestamp
            )
        except Exception as e:
            logging.error(f"Error starting game: {e}")
            raise HTTPException(status_code=500, detail="Internal Server Error")
    else:
        raise HTTPException(status_code=503, detail="Service Unavailable")
