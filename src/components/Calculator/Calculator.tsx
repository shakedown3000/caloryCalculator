import "./calculator.css";
import { useState } from "react";

const Calculator = () => {
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

  // Calculate Button
  const calculateCalories = () => {
    if (weight && bodySize && age) {
      let baseMetabolicRateValue = 0;
      if (gender === "male") {
        baseMetabolicRateValue =
          66.47 + 13.7 * weight + 5 * bodySize - 6.8 * age;
      } else if (gender === "female") {
        baseMetabolicRateValue =
          655.1 + 9.6 * weight + 1.8 * bodySize - 4.7 * age;
      }
      setBaseMetabolicRate(baseMetabolicRateValue);
      console.log(baseMetabolicRateValue);
      // berechnen * PAL
      const baseMetabolicRateActivityValue =
        baseMetabolicRateValue * Number(activity);
      // Ändern des States
      setbaseMetabolicRateActivity(baseMetabolicRateActivityValue);
    } else {
      console.log("Choose gender");
    }
  };
  // Wenn Wert nicht Null ist dann berechne
  let dailyCals = baseMetabolicRate
    ? (baseMetabolicRate * 4.1868).toFixed(2)
    : "";
  let dailyCalsActive = baseMetabolicRateActivity
    ? (baseMetabolicRateActivity * 4.1868).toFixed(2)
    : "";

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
      {/* Input field start */}
      <div className="input">
        <div className="formfieldWrapper">
          <div className="formFields">
            <label htmlFor="bodySizeInput">Body Size in cm</label>
            <input
              type="number"
              placeholder="Your Size"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setBodySize(Number(event.target.value))
              }
              value={bodySize}
            />
          </div>

          <div className="formFields">
            <label htmlFor="ageInput">Your Age</label>
            <input
              type="number"
              placeholder="Age"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setAge(Number(event.target.value))
              }
              value={age}
            />
          </div>
          <div className="formFields">
            <label htmlFor="weightInput">Weight (in kgs)</label>
            <input
              type="number"
              placeholder="Weight"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setWeight(Number(event.target.value))
              }
              value={weight}
            />
          </div>
          <div className="formFields">
            <label htmlFor="activity">Activity</label>
            <select
              name="activity"
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

          <div className="formFields">
            {/* Gender  */}
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

        <button id="calculate_button" onClick={calculateCalories}>
          Berechne
        </button>
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
                  {baseMetabolicRate !== null
                    ? baseMetabolicRate.toFixed(2)
                    : ""}
                </td>
                <td>{dailyCals}</td>
              </tr>
              <tr>
                <td>Total Daily Energy Expenditure</td>
                <td>
                  {baseMetabolicRateActivity !== null
                    ? baseMetabolicRateActivity.toFixed(2)
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
