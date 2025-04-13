📄 Dokumentacja aplikacji webowej Nata-Cafe
🧁 Opis ogólny

Nata-Cafe to nowoczesna aplikacja internetowa stworzona dla cukiernio-kawiarni, która umożliwia klientom wygodne przeglądanie oferty produktów, wybieranie rozmiarów zamówień, a także składanie zamówień z opcją dostawy lub odbioru osobistego. Aplikacja została zbudowana przy użyciu biblioteki React i narzędzia Vite, co zapewnia szybkie ładowanie i sprawne działanie interfejsu użytkownika.
⚙️ Technologie

    React – do budowy komponentów UI

    Vite – jako bundler i środowisko deweloperskie

    React Router DOM – do zarządzania routingiem w aplikacji

    React Context API (useContext) – do globalnego zarządzania stanem koszyka

🛠️ Funkcjonalności
🔍 Strona główna – przegląd produktów

    Wyświetlenie listy dostępnych produktów (ciasta, kawa, desery itp.)

    Możliwość wyboru rozmiaru produktu (np. mały, średni, duży)

    Dodawanie produktów do koszyka

🛒 Koszyk

    Zarządzanie zawartością koszyka z wykorzystaniem useContext

    Przegląd wybranych produktów, ilości i rozmiarów

    Możliwość modyfikacji lub usunięcia pozycji z koszyka

🚚 Składanie zamówienia

    Wybór formy realizacji zamówienia:

        Dostawa

        Odbiór osobisty

    Formularz z podstawowymi danymi kontaktowymi (w przypadku dostawy)

🧩 Routing – nawigacja między stronami

W aplikacji wykorzystano react-router-dom do obsługi nawigacji między stronami, np.:

    / – Strona główna z produktami

    /cart – Koszyk

    /checkout – Finalizacja zamówienia

    /confirmation – Potwierdzenie zamówienia

🧱 Architektura stanu

Aplikacja używa Context API do przechowywania i zarządzania stanem koszyka, co umożliwia:

    Globalny dostęp do danych koszyka z dowolnego komponentu

    Skalowalność i prostotę zarządzania logiką dodawania/usuwania produktów

🧭 Możliwości rozwoju (planowane funkcje)

    🔐 System kont użytkowników

        Logowanie i rejestracja

        Historia zamówień

    🎁 System punktów lojalnościowych

        Zdobywanie punktów za zamówienia

        Wymiana punktów na rabaty lub nagrody

    📱 Responsywność i PWA

        Lepsza obsługa na urządzeniach mobilnych

        Możliwość dodania aplikacji do ekranu głównego jako PWA

🖼️ UI/UX

Interfejs aplikacji jest intuicyjny, estetyczny i zoptymalizowany pod kątem użytkowników końcowych – zarówno na komputerach, jak i urządzeniach mobilnych. Kolorystyka i typografia nawiązują do klimatu nowoczesnej kawiarni z domową atmosferą.
