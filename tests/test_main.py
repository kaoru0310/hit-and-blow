import pytest
from fastapi.testclient import TestClient
from backend.main import app, request_queue

client = TestClient(app)

def test_start_game():
    response = client.post("/start-game")
    assert response.status_code == 200
    data = response.json()
    assert "computer_numbers" in data
    assert "game_id" in data
    assert "timestamp" in data
    assert len(data["computer_numbers"]) == 3
    assert isinstance(data["game_id"], str)
    assert isinstance(data["timestamp"], str)

def test_queue_mechanism():
    # Clear the queue before testing
    while not request_queue.empty():
        request_queue.get()

    # Add multiple requests to the queue
    for _ in range(5):
        request_queue.put("start_game_request")

    # Ensure the queue is not empty
    assert not request_queue.empty()

    # Process the requests
    for _ in range(5):
        response = client.post("/start-game")
        assert response.status_code == 200

    # Ensure the queue is empty after processing
    assert request_queue.empty()

def test_unique_game_id():
    game_ids = set()
    for _ in range(10):
        response = client.post("/start-game")
        assert response.status_code == 200
        data = response.json()
        game_id = data["game_id"]
        assert game_id not in game_ids
        game_ids.add(game_id)

def test_logging_configuration(caplog):
    with caplog.at_level(logging.INFO):
        response = client.post("/start-game")
        assert response.status_code == 200
        assert "Game started with ID" in caplog.text
