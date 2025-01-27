import "./calculator.css";
import { useState } from "react";

const Calculator = () => {
  // ! Variables/Use States
  // Body Size in cm
  const [bodySize, setBodySize] = useState<number>();
  console.log(bodySize);
  // Age
  const [age, setAge] = useState<number>();
  // Weight
  const [weight, setWeight] = useState<number>();
  // Activity (Select)
  const [activity, setActivity] = useState<string>("0.95");
  // Gender
  const [gender, setGender] = useState<string>("");
  // Const
  const [baseMetabolicRate, setBaseMetabolicRate] = useState<number | null>(
    null
  );
  const [baseMetabolicRateActivity, setbaseMetabolicRateActivity] = useState<
    number | null
  >(null);

  // ! Aktivierte Funktion durch Button,
  // Berechnung starten
  const calculateCalories = () => {
    if (weight && bodySize && age) {
      let baseMetabolicRateValue = 0;
      if (gender === "male") {
        baseMetabolicRateValue =
          // Formel BMI Männer
          66.47 + 13.7 * weight + 5 * bodySize - 6.8 * age;
      } else if (gender === "female") {
        baseMetabolicRateValue =
          // Formel BMI Frauen
          655.1 + 9.6 * weight + 1.8 * bodySize - 4.7 * age;
      }
      // Der Value von oben wird hier eingesetzt
      setBaseMetabolicRate(baseMetabolicRateValue);
      // dann berechnen wir das ganze mal PAL (Aktivität)
      const baseMetabolicRateActivityValue =
        baseMetabolicRateValue * Number(activity);
      // Ändern des States der MetabolicRateActivity
      setbaseMetabolicRateActivity(baseMetabolicRateActivityValue);
    } else {
      console.log("Choose gender");
    }
  };
  // ! Umrechnen der Werte in Kilojoule
  // Verarbeiten der Ergebnisse fürs die finale Ausgabe zunächst in Kilojoule, der Rest wird weiter unten gerendert
  let dailyCals = baseMetabolicRate
    ? // Zusätzlich Kilojoule berechnen und runden
      (baseMetabolicRate * 4.1868).toFixed(0)
    : "";
  let dailyCalsActive = baseMetabolicRateActivity
    ? (baseMetabolicRateActivity * 4.1868).toFixed(0)
    : "";

  //  ! Rendern
  return (
    <section className="outerCalculator">
      <div className="description">
        <h1>Test your daily calorie requirement</h1>
        <p>
          To determine your daily calorie requirement, we need some information
          about your age, gender, weight, height and activity level. Enter this
          information to calculate your individual requirements.
        </p>
      </div>

      {/* Größe */}
      <div className="input">
        <div className="formfieldWrapper">
          <div className="formFields">
            <label htmlFor="bodySizeInput">Body Size in cm</label>
            <input
              type="number"
              placeholder="Your Size"
              min="0"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setBodySize(Number(event.target.value))
              }
              value={bodySize}
            />
          </div>
          {/* Alter */}
          <div className="formFields">
            <label htmlFor="ageInput">Your Age</label>
            <input
              type="number"
              placeholder="Age"
              min="0"
              // Wenn sich etwas ändert, nimm den Wert mit
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                // Setter wird mit aktuellem Input Value aus dem Feld befüllt
                setAge(Number(event.target.value))
              }
              value={age}
            />
          </div>
          {/* Gewicht */}
          <div className="formFields">
            <label htmlFor="weightInput">Weight (in kgs)</label>
            <input
              type="number"
              placeholder="Weight"
              min="0"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setWeight(Number(event.target.value))
              }
              value={weight}
            />
          </div>
          {/* Aktivity (Select Dropdown) */}
          <div className="formFields">
            <label htmlFor="activity">Activity</label>
            <select
              name="activity"
              // ausgeführt, wenn sich der ausgewählte Wert im Dropdown-Menü ändert (React Event Handler für Select Elemente)
              onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                setActivity(event.target.value)
              }
              className="narrow-select"
              value={activity}
            >
              <option value="0.95">Schlafen</option>
              <option value="1.2">Nur Sitzen oder Liegen</option>
              <option value="1.5">
                Ausschließlich sitzende Tätigkeit mit wenig oder keiner
                körperlichen Aktivität in der Freizeit, z.B. Büroarbeit
              </option>
              <option value="1.7">
                Sitzende Tätigkeit mit zeitweilig gehender oder stehender
                Tätigkeit, z.B. Studierende, Fließbandarbeitende,
                Laborfachkräfte, Berufskraftfahrende
              </option>
              <option value="1.9">
                Überwiegend gehende oder stehende Tätigkeit, z.B.
                Verkäufer:innen, Kellner:innen, Handwerker:innen,
                Mechaniker:innen
              </option>
              <option value="2.2">
                Körperliche anstrengende berufliche Arbeit
              </option>
            </select>
          </div>

          {/* Gender Radiobutton */}
          <div className="formFields">
            <label className="center-label" htmlFor="gender">
              Gender
            </label>
            <div className="formFields gender">
              <div>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  checked={gender === "male"}
                  onChange={(event) => setGender(event.target.value)}
                />
                <label htmlFor="male">Male</label>
              </div>

              <div>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  checked={gender === "female"}
                  onChange={(event) => setGender(event.target.value)}
                />
                <label htmlFor="female">Female</label>
              </div>
            </div>
          </div>
        </div>
        {/* ! Aktivierung Funktion */}
        <button id="calculate_button" onClick={calculateCalories}>
          Berechne
        </button>

        {/* Input Feld Ende - Ausgabe in Tabelle */}
        <div className="outPut">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>kcal</th>
                <th>kj</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Basic Metabolic Rate</td>
                <td>
                  {/* Wenn die BMR ungleich null ist, runde sie */}
                  {baseMetabolicRate !== null
                    ? baseMetabolicRate.toFixed(0)
                    : ""}
                </td>
                <td>{dailyCals}</td>
              </tr>
              <tr>
                <td>Total Daily Energy Expenditure</td>
                <td>
                  {baseMetabolicRateActivity !== null
                    ? baseMetabolicRateActivity.toFixed(0)
                    : ""}
                </td>
                <td>{dailyCalsActive}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
