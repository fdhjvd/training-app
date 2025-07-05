
import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { Card, CardContent } from "./components/ui/card.js";
import { Button } from "./components/ui/button.js";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs.js";

const schedule = {
  "السبت": ["ضغط صدر مائل", "تمرين ترايسبس", "تمرين معدة"],
  "الأحد": ["تمارين ظهر", "تمرين بايسبس", "تمرين كارديو"],
  "الاثنين": ["راحة"],
  "الثلاثاء": ["سكوات", "تمرين الرجل الأمامية", "السمانة"],
  "الأربعاء": ["تمرين أكتاف", "تمرين ترابيس", "تمرين معدة"],
  "الخميس": ["تمارين متنوعة", "كارديو", "ستريتش"],
  "الجمعة": ["راحة"]
};

function App() {
  const [completed, setCompleted] = useState({});

  const toggleExercise = (day, index) => {
    setCompleted((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [index]: !prev[day]?.[index]
      }
    }));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif", direction: "rtl", background: "#f9f9f9", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>📆 جدول تدريب لتضخيم وقوة - نسخة مطورة</h1>
      <Tabs defaultValue="السبت">
        <TabsList>
          {Object.keys(schedule).map((day) => (
            <TabsTrigger key={day} value={day}>
              {day}
            </TabsTrigger>
          ))}
        </TabsList>
        {Object.entries(schedule).map(([day, exercises]) => (
          <TabsContent key={day} value={day}>
            {exercises.length === 1 && exercises[0] === "راحة" ? (
              <p>💤 راحة اليوم</p>
            ) : (
              exercises.map((ex, index) => (
                <Card key={index} className={completed[day]?.[index] ? "bg-green-100" : ""}>
                  <CardContent className="flex justify-between items-center">
                    <span>{ex}</span>
                    <Button onClick={() => toggleExercise(day, index)}>
                      {completed[day]?.[index] ? "✅ مكتمل" : "إكمال"}
                    </Button>
                  </CardContent>
                </Card>
              ))
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
