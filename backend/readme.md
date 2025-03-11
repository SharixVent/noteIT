# Instrukcja konfiguracji i uruchomienia backendu

## Wymagania wstępne

1. Zainstaluj [Python](https://www.python.org/downloads/) (wersja 3.6 lub nowsza).
2. Zainstaluj [pip](https://pip.pypa.io/en/stable/installation/).

## Konfiguracja środowiska

1. Sklonuj repozytorium:
    ```sh
    git clone <URL_REPOZYTORIUM>
    cd backend
    ```

2. Utwórz i aktywuj wirtualne środowisko:

    **Na Linux/Mac:**
    ```sh
    python3 -m venv venv
    source venv/bin/activate
    ```

    **Na Windows:**
    ```sh
    python -m venv venv
    venv\Scripts\activate
    ```

3. Zainstaluj wymagane pakiety:
    ```sh
    pip install -r requirements.txt
    ```

## Uruchomienie aplikacji Flask

1. Upewnij się, że wirtualne środowisko jest aktywowane.
2. Uruchom aplikację:
    ```sh
    python routes.py
    ```

3. Aplikacja będzie dostępna pod adresem: `http://127.0.0.1:5000/`

## Jak tworzyć/modyfikować tabele w bazie danych

### Krok 1: Dodawanie nowych tabel

Dodaj nowy model w pliku `models.py`:

Aby dodać nową tabelę w bazie danych, musisz stworzyć nowy model w pliku `models.py`. Oto przykład:

```python
from app import db

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    price = db.Column(db.Float, nullable=False)

    def __repr__(self):
        return f"<Product {self.name}>"
```

W tym przypadku tworzymy tabelę `Product`, która będzie przechowywać dane o produktach z polami `id`, `name` oraz `price`.

Zaktualizuj plik `__init__.py` (jeśli to konieczne):

Zwykle Flask automatycznie wykrywa modele, ale warto dodać import nowego modelu do pliku `app/__init__.py`, jeżeli model jest wykorzystywany w aplikacji.

W `app/__init__.py` dodaj:

```python
from app.models import Product
```

### Krok 2: Tworzenie tabel w bazie danych

Po dodaniu nowego modelu musisz stworzyć odpowiednią tabelę w bazie danych. Aby to zrobić, wykonaj poniższe kroki:

Uruchom Flask Shell:

```sh
flask shell
```

Zaimportuj modele i utwórz tabele: W środowisku Flask Shell uruchom:

```python
from app import db
db.create_all()  # To utworzy tabele, które zostały zdefiniowane w models.py
```

Jeśli wszystko jest poprawnie skonfigurowane, tabela `Product` zostanie stworzona w bazie danych.

### Krok 3: Modyfikowanie tabel

Aby modyfikować istniejące tabele (np. dodanie nowych pól do istniejącego modelu), wykonaj następujące kroki:

Zmień model w pliku `models.py`:

Przykładowo, aby dodać nowe pole `description` do modelu `Product`:

```python
class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    price = db.Column(db.Float, nullable=False)
    description = db.Column(db.String(250))  # Nowe pole

    def __repr__(self):
        return f"<Product {self.name}>"
```

Zaktualizuj bazę danych:

Aby zaktualizować bazę danych (dodanie nowych pól), będziesz musiał wykonać migracje bazy danych. Możesz użyć narzędzi takich jak Flask-Migrate lub po prostu usunąć bazę danych i stworzyć ją na nowo (jeśli to ma sens w przypadku małego projektu).

Aby usunąć starą bazę danych (jeśli to dopuszczalne):

```sh
rm app.db
flask shell
```

Następnie ponownie uruchom:

```python
from app import db
db.create_all()  # Nowa tabela z nowymi polami
```

### Krok 4: Sprawdzenie bazy danych

Możesz sprawdzić, czy tabele zostały poprawnie utworzone i zawierają dane, wykonując te same kroki, które były opisane wcześniej:

Uruchom Flask Shell:

```sh
flask shell
```

Zapytaj o dane z bazy:

Aby sprawdzić wszystkie produkty:

```python
from app.models import Product
products = Product.query.all()
print(products)
```

Jeśli chcesz dodać nowy rekord:

```python
new_product = Product(name="T-shirt", price=19.99, description="Stylowa koszulka")
db.session.add(new_product)
db.session.commit()
```

## Pliki

- `.gitignore`: Plik konfiguracyjny Git ignorujący katalog `venv`.
- `requirements.txt`: Lista wymaganych pakietów Python.
- `routes.py`: Główny plik aplikacji Flask, który zawiera wszystkie trasy API.
- `models.py`: Plik z definicjami modeli bazy danych.