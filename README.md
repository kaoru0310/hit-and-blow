A browser-based Hit and Blow game where the player competes against the computer.

## Game Instructions:
1. The player selects 3 (or 4) distinct numbers from 0 to 9 and decides their order.
2. The roles of the first and second player are determined.
3. The first player makes a guess of the opponent's numbers and declares it.
4. The opponent responds with the number of "hits" (correct number and correct position) and "blows" (correct number but incorrect position).
5. Then, the second player makes a guess of the first player's numbers and declares it.
6. Similarly, the first player responds with the number of "hits" and "blows."
7. Repeat steps 3 to 6, and the first player to correctly guess all the numbers in the correct order wins the game.

## Rules:

1. A "hit" occurs when both the number and position are correct.
2. A "blow" occurs when the number is correct, but the position is incorrect.
3. Duplicate numbers are not allowed when deciding one's own numbers.

## ゲーム手順

1. プレイヤーは異なる数字で0~9のうちから3つ（または4つ）を選び、その順番も決定します。
2. 先攻・後攻を決めます。
3. 先攻が相手の数字を予想し、それを宣言します。
4. 相手はその予想に対して「hit」（数字と位置が合っている）および「blow」（数字は合っているが位置が異なる）の数を答えます。
5. 次に、後攻が相手の数字を予想して宣言します。
6. これも同様に、先攻が「hit」と「blow」の数を答えます。
7. 3~6の手順を繰り返し、最初にすべての数字と順番が一致したプレイヤーが勝利します。

## ルール

1. hitは数字および順番が正しい場合
2. blowは数字は正しいが順番が誤っている場合
3. 自分の数字を決める際、重複する数字は使えない

## Next.js Implementation

The game start screen is created using Next.js. The start screen includes a title and a start button that navigates to the game page.

## Running the Next.js Application

To run the Next.js application, follow these steps:

1. Build the Docker image:
   ```
   docker-compose build
   ```

2. Run the Docker containers:
   ```
   docker-compose up
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running the FastAPI Backend Server

To run the FastAPI backend server, follow these steps:

1. Build the Docker image:
   ```
   docker-compose build
   ```

2. Run the Docker containers:
   ```
   docker-compose up
   ```

3. The server will be available at [http://localhost:8000](http://localhost:8000).

## JSON Response Format of the `/start-game` API

The `/start-game` API returns the following JSON response:

```json
{
  "computer_numbers": [1, 2, 3],
  "game_id": "unique-game-id",
  "timestamp": "2023-01-01T00:00:00"
}
```

- `computer_numbers`: An array of distinct numbers selected by the computer in a random order.
- `game_id`: A unique identifier for the game session.
- `timestamp`: The timestamp when the game was started.

## Configuring Logging Settings

The FastAPI backend server uses Python's built-in `logging` module to log game start requests. To configure the logging settings, follow these steps:

1. Open the `backend/main.py` file.
2. Locate the logging configuration section:
   ```python
   logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
   ```
3. Modify the logging level, format, or other settings as needed.

## Setting Up the Local Development Environment

To set up the local development environment for running both the Next.js application and the FastAPI backend server, follow these steps:

1. Clone the repository:
   ```
   git clone https://github.com/kaoru0310/hit-and-blow.git
   ```

2. Navigate to the project directory:
   ```
   cd hit-and-blow
   ```

3. Build the Docker images:
   ```
   docker-compose build
   ```

4. Run the Docker containers:
   ```
   docker-compose up
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the Next.js application.

6. The FastAPI backend server will be available at [http://localhost:8000](http://localhost:8000).
