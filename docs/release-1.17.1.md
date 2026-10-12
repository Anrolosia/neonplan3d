**NeonPlan 3D 1.17.1** fixes what you reported after 1.17.0: terrace doors that open outwards, the robot vacuum with dock from the Smart Home pack, smoke detectors with binary sensors and roof windows in the room view. The wall view can zoom now, and pools get a real depth.

### New

- **Wall view – zoom:** in *Wall from the front* the mouse wheel zooms towards the pointer, two fingers on a tablet; **＋ / − / ⤢** at the bottom right, arrows move the view while zoomed. Small parts such as connections are easy to hit now.
- **Pools with depth:** a pool has a **basin depth** (1.50 m unless set) and a **rim above the lawn** – a 1.50 m pool that stands 20 cm out of the lawn: depth 1.50, rim 0.20. In 3D you look through the water onto the basin's walls and floor.
- **Terrace doors open outwards:** **⇅ Reverse opening direction** now works for terrace doors too; in 3D the sashes swing outside (#492).

### Fixed

- **Robot vacuum with dock (Smart Home pack):** it gets the **Current room (sensor)** field, links to the vacuum in its room by itself and drives its lanes through the reported room in 3D like the built-in robot (#470, thanks MKRAFT3D and frops83).
- **Smoke detectors** take binary sensors (`binary_sensor.…_smoke`); other items offer binary sensors of alarm classes (smoke, gas, CO, water, heat) (#490, thanks frops83).
- **Roof windows** stay in the slope when the roof fades out over a floor or a room – open, tilted, blind down; a closed rim between roof and frame, so a low view no longer looks through into the room below (#482 thanks RkcCorian, #490).
- **Wall view:** the Del key there no longer reaches what is chosen in the plan behind it.

### How to update

Settings → System → Updates. HACS only looks for new versions every few hours, so a fresh update may not show there yet. Then: HACS → NeonPlan 3D → ⋮ → **Update information** → **Download**. Restart Home Assistant and reload the page (Ctrl+F5).

---

**NeonPlan 3D 1.17.1** behebt, was ihr nach der 1.17.0 gemeldet habt: Terrassentüren, die nach außen öffnen, den Saugroboter mit Station aus dem Pack Smart Home, Rauchmelder mit Binärsensoren und Dachfenster in der Raumansicht. Die Wandansicht kann jetzt zoomen, und Pools bekommen eine echte Tiefe.

### Neu

- **Wandansicht – Zoom:** In *Wand von vorne* zoomt das Mausrad dorthin, wo die Maus steht, am Tablet zwei Finger; **＋ / − / ⤢** unten rechts, vergrößert schieben Pfeile den Ausschnitt. Kleine Teile wie Anschlüsse triffst du so leicht.
- **Pools mit Tiefe:** Ein Pool hat eine **Beckentiefe** (sonst 1,50 m) und einen **Rand über dem Rasen** – ein 1,50 m tiefer Pool, der 20 cm aus dem Rasen schaut: Tiefe 1,50, Rand 0,20. In 3D siehst du durch das Wasser auf Wände und Boden des Beckens.
- **Terrassentüren nach außen:** **⇅ Öffnungsrichtung umdrehen** gibt es jetzt auch bei Terrassentüren; in 3D schwingen die Flügel nach draußen (#492).

### Behoben

- **Saugroboter mit Station (Pack Smart Home):** Er hat jetzt das Feld **Aktueller Raum (Sensor)**, verknüpft sich von selbst mit dem Sauger im Raum und fährt in 3D seine Bahnen durch den gemeldeten Raum wie der eingebaute Roboter (#470, danke MKRAFT3D und frops83).
- **Rauchmelder** nehmen Binärsensoren (`binary_sensor.…_smoke`); andere Möbel bieten Binärsensoren mit Alarm-Klasse an (Rauch, Gas, CO, Wasser, Hitze) (#490, danke frops83).
- **Dachfenster** bleiben in der Schräge stehen, wenn das Dach über einer Etage oder einem Raum ausblendet – offen, gekippt, Rollladen unten; ein geschlossener Rand zwischen Dach und Rahmen, so schaut man von schräg vorne nicht mehr in den Raum darunter (#482 danke RkcCorian, #490).
- **Wandansicht:** Die Taste Entf erreicht dort nicht mehr, was im Grundriss dahinter ausgewählt ist.

### So bekommst du das Update

Einstellungen → System → Updates. HACS sucht nur alle paar Stunden nach neuen Versionen, deshalb fehlt ein frisches Update dort manchmal noch. Dann: HACS → NeonPlan 3D → ⋮ → **Informationen aktualisieren** → **Herunterladen**. Home Assistant neu starten und die Seite neu laden (Strg+F5).
