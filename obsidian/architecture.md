# Architecture

1. Strona wejściowa - **gateway** to formularz do logowania. Uytkownik wprowadza username (email) oraz hasło. Wysyłany jest **POST REQUEST** do servera który analizuje dane. Jezeli jest ok wprowadza na stronie, jeśli nie to pokazuje błąd logowania.

---

2. **Home Page** -> strona powitalna, na której znajduje się karty obrazu i napisu powitalnego oraz stópki. Opcja wyświetlenia przewodnika po systemie pod przyciskiem.

---
3. **Dashboard Page** -> strona ze statystykami. 