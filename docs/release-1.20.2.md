**NeonPlan 3D 1.20.2** brings fixes for stairwells, the media card and voice control on Android tablets, and more control over the devices of outdoor areas.

### Fixed

- **Floor opening over tall stairs (#375):** an opening above stairs that reach higher than the floor was not cut at all when the opening and the stairs' own hole together reached past the room. Each opening is now cut room by room. Thanks @wouter-b for narrowing it down and the plan, and @LarsTh86!
- **▶ after ⏸ on the media card (#400):** on players that can pause but do not report "play" (an Echo through Alexa Media Player) the ▶ button was greyed out and sent nothing. It now resumes playback. Thanks @domodial!
- **Voice control on Android tablets (#579):** some WebViews (e.g. Fully Kiosk on a Huawei tablet) recorded only silence, because the audio was started too late after the tap. It now starts on the tap itself. If only silence still comes in, NeonPlan says why: usually another app holds the microphone, for example Fully Kiosk's acoustic motion detection. Thanks @PetrMa!

### Improved

- **Devices of outdoor areas (#597):** an outdoor area acting as a room lists its area's devices in the editor with the same buttons as a room. **☆** shows a device in the room panel without placing it, **👁** hides it there, and **Aa** leaves out its state text. Thanks @RkcCorian!

### How to update

Settings → System → Updates. HACS only looks for new versions every few hours, so a fresh update may not show there yet. Then: HACS → NeonPlan 3D → ⋮ → **Update information** → **Download**. Restart Home Assistant and reload the page (Ctrl+F5).

---

**NeonPlan 3D 1.20.2** bringt Fehlerbehebungen für Treppenöffnungen, die Medienkarte und die Sprachsteuerung auf Android-Tablets, dazu mehr Kontrolle über die Geräte von Außenflächen.

### Behoben

- **Bodenöffnung über hohen Treppen (#375):** Eine Öffnung über einer Treppe, die höher reicht als die Etage, wurde gar nicht ausgeschnitten, wenn Öffnung und Treppenloch zusammen über den Raum hinausreichten. Jetzt wird jede Öffnung Raum für Raum ausgeschnitten. Danke an @wouter-b für das Eingrenzen und den Plan, und an @LarsTh86!
- **▶ nach ⏸ auf der Medienkarte (#400):** Bei Playern, die pausieren können, aber kein „Play“ melden (ein Echo über Alexa Media Player), war ▶ ausgegraut und schickte nichts. Jetzt geht die Wiedergabe weiter. Danke an @domodial!
- **Sprachsteuerung auf Android-Tablets (#579):** Manche WebViews (z. B. Fully Kiosk auf einem Huawei-Tablet) nahmen nur Stille auf, weil der Ton zu spät nach dem Antippen gestartet wurde. Jetzt startet er direkt beim Antippen. Kommt trotzdem nur Stille an, sagt NeonPlan, woran es liegt: Meist hält eine andere App das Mikrofon fest, etwa die Bewegungserkennung per Geräusch in Fully Kiosk. Danke an @PetrMa!

### Verbessert

- **Geräte von Außenflächen (#597):** Eine Außenfläche, die wie ein Raum wirkt, listet die Geräte ihres Bereichs im Editor mit denselben Knöpfen wie ein Raum. **☆** zeigt ein Gerät im Raumfenster, ohne es zu platzieren, **👁** blendet es dort aus, und **Aa** lässt seinen Zustandstext weg. Danke an @RkcCorian!

### So bekommst du das Update

Einstellungen → System → Updates. HACS sucht nur alle paar Stunden nach neuen Versionen, deshalb fehlt ein frisches Update dort manchmal noch. Dann: HACS → NeonPlan 3D → ⋮ → **Informationen aktualisieren** → **Herunterladen**. Home Assistant neu starten und die Seite neu laden (Strg+F5).
