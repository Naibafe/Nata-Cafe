📄 Dokumentacja aplikacji webowej Nata-Cafe
🧁 Opis ogólny

Nata-Cafe to nowoczesna aplikacja internetowa stworzona dla cukiernio-kawiarni, która umożliwia klientom wygodne przeglądanie oferty produktów, wybieranie rozmiarów zamówień, a także składanie zamówień z opcją dostawy lub odbioru osobistego. Aplikacja została zbudowana przy użyciu biblioteki React i narzędzia Vite, co zapewnia szybkie ładowanie i sprawne działanie interfejsu użytkownika.

⚙️ TECHNOLOGIE

    React – do budowy komponentów UI

    Vite – jako bundler i środowisko deweloperskie

    React Router DOM – do zarządzania routingiem w aplikacji

    React Context API (useContext) – do globalnego zarządzania stanem koszyka

🛠️ FUNKCJONALNOŚCI
    
    Strona główna – przegląd produktów

    Wyświetlenie listy dostępnych produktów (ciasta, kawa, desery itp.)

    Możliwość wyboru rozmiaru produktu (np. mały, średni, duży)

    Dodawanie produktów do koszyka

    Finalne zamówienie i wybór dostawy

🛒 KOSZYK

    Zarządzanie zawartością koszyka z wykorzystaniem useContext

    Przegląd wybranych produktów, ilości i rozmiarów

    Możliwość modyfikacji lub usunięcia pozycji z koszyka

🚚 SKŁADANIE ZAMÓWIENIA

    Wybór formy realizacji zamówienia:

        Dostawa

        Odbiór osobisty

    Formularz z podstawowymi danymi kontaktowymi (w przypadku dostawy)

🧩 Routing – nawigacja między stronami

W aplikacji wykorzystano react-router-dom do obsługi nawigacji między stronami, np.:

    / – Strona główna

    /contact - Strona z kontaktem

    /products - Strona z produktami

    /checkout – Finalizacja zamówienia

    /confirmation – Potwierdzenie zamówienia

🧱 Architektura stanu

    Aplikacja używa Context API do przechowywania i zarządzania stanem koszyka, co umożliwia:

    Globalny dostęp do danych koszyka z dowolnego komponentu

    Skalowalność i prostotę zarządzania logiką dodawania/usuwania produktów
    

    Wykorzystanie useState do prostrzych zadań lokalnych ze stanem

    Wykorzystanie useEffect do przeprowadzenia synchronizacji i działań w procesach zarządzania danymi aplikacji

🧭 Możliwości rozwoju (planowane funkcje)

    🔐 System kont użytkowników

        Logowanie i rejestracja

        Historia zamówień

    🎁 System punktów lojalnościowych

        Zdobywanie punktów za zamówienia

        Wymiana punktów na rabaty lub nagrody

    📱 Responsywność i PWA

        Lepsza obsługa na urządzeniach mobilnych

