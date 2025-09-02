import os
from openai import OpenAI

api_key = os.environ['OPENAI_API_KEY']

client = OpenAI(api_key=api_key)

response = client.responses.create(
    model="gpt-4o-mini",
    input="write a haiku about ai",
    store=True,
)

print(response.output_text)