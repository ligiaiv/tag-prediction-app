from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
origins = [
    "http://localhost:5173",
    "localhost:5173"
]
#
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/", tags=["root"])
async def read_root() -> dict:
    return {"message": "Welcome to your todo list."}

@app.get("/users", tags=["users"])
async def read_users() -> dict:
    print("received request")
    default_user = {"userName": "ligia",
    "userId": "string",
    "envelopes": [],
    "income": 50}
    users = [default_user]
    return {"data" : users}

@app.post("/generate")
async def generate_summary(generate_request) -> dict:
    generate_request.title
    print("received request")
    default_user = {"userName": "ligia",
                    "userId": "string",
                    "envelopes": [],
                    "income": 50}
    users = [default_user]
    return {"data" : users}