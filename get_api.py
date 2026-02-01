import requests
import time
import tkinter as tk
from PIL import Image, ImageTk
from io import BytesIO

URL = "https://dragonball-api.com/api/characters"

# Ventana principal
root = tk.Tk()
root.title("Dragon Ball API Viewer")
root.geometry("700x400")
root.config(bg="#f0f0f0")

# Contenedor principal
frame = tk.Frame(root, bg="#f0f0f0")
frame.pack(pady=20)

# Imagen a la izquierda
img_label = tk.Label(frame, bg="#f0f0f0")
img_label.grid(row=0, column=0, padx=20)

# Texto a la derecha
info_label = tk.Label(frame, text="", font=("Arial", 14), justify="left", bg="#f0f0f0")
info_label.grid(row=0, column=1, sticky="w")

# Obtener datos completos
response = requests.get(URL)
data = response.json()
items = data.get("items", [])

index = 0


def cargar_personaje(i):
    """Carga imagen y datos del personaje"""
    personaje = items[i]

    # Mostrar texto
    texto = (
        f"ID: {personaje['id']}\n"
        f"Nombre: {personaje['name']}\n"
        f"Raza: {personaje['race']}\n"
        f"Género: {personaje['gender']}\n"
        f"Ki: {personaje['ki']}"
    )
    info_label.config(text=texto)

    # Descargar imagen
    img_url = personaje["image"]
    img_bytes = requests.get(img_url).content
    img = Image.open(BytesIO(img_bytes))
    img = img.resize((250, 250))  # tamaño ideal
    img_tk = ImageTk.PhotoImage(img)

    # Mantener referencia
    img_label.img = img_tk
    img_label.config(image=img_tk)


def siguiente():
    """Avanza al siguiente personaje"""
    global index
    index += 1
    if index >= len(items):
        index = 0
    cargar_personaje(index)


# Botón
btn = tk.Button(root, text="Siguiente personaje", font=("Arial", 12), command=siguiente)
btn.pack(pady=10)

# Cargar el primero
cargar_personaje(index)

root.mainloop()

time.sleep(8)  # Pausa de 1 segundo entre solicitudes