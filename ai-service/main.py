from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="Electricity Theft Detection AI Service")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
    "http://localhost:5173",
    "https://ai-electricity-theft-detection-4loc.vercel.app"
],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ConsumerData(BaseModel):
    consumer_id: str
    consumption: float
    risk_score: float


@app.get("/")
def home():
    return {"message": "AI Service Running"}


@app.get("/health")
def health():
    return {"status": "AI Service is healthy"}


@app.post("/analyze")
def analyze_consumer(data: ConsumerData):

    # Risk level
    if data.risk_score >= 80:
        risk_level = "High Risk"
    elif data.risk_score >= 50:
        risk_level = "Review Required"
    else:
        risk_level = "Normal"

    # Consumption pattern
    if data.consumption >= 450:
        pattern = "High and potentially abnormal electricity consumption."
    elif data.consumption >= 300:
        pattern = "Moderate electricity consumption with some irregularity."
    else:
        pattern = "Normal electricity consumption pattern."

    # Possible reason
    if data.risk_score >= 80:
        reason = (
            "The combination of high risk score and electricity consumption "
            "may indicate an unusual usage pattern that requires verification."
        )
    elif data.risk_score >= 50:
        reason = (
            "Some variation is present in the consumption pattern. "
            "Further monitoring is recommended."
        )
    else:
        reason = "No significant abnormal pattern detected from the given values."

    # Recommendation
    if data.risk_score >= 80:
        recommendation = (
            "Inspect the meter, verify recent consumption records, "
            "and schedule a field inspection if required."
        )
    elif data.risk_score >= 50:
        recommendation = (
            "Continue monitoring the consumer's consumption and "
            "compare it with historical readings."
        )
    else:
        recommendation = "Continue normal monitoring."

    analysis = f"""
Risk Level: {risk_level}

Consumption Pattern:
{pattern}

Possible Reason:
{reason}

Recommendation:
{recommendation}

Note:
This is an AI-assisted screening result based on the supplied data.
It is not a confirmed determination of electricity theft.
"""

    return {
        "consumer_id": data.consumer_id,
        "consumption": data.consumption,
        "risk_score": data.risk_score,
        "risk_level": risk_level,
        "ai_analysis": analysis
    }