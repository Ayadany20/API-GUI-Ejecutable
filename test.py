import requests

url = "https://dragonball-api.com/api/characters"

response = requests.get(url)

print(response.json())
