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

## Pliki

- `.gitignore`: Plik konfiguracyjny Git ignorujący katalog `venv`.
- `requirements.txt`: Lista wymaganych pakietów Python.
- `routes.py`: Główny plik aplikacji Flask.
