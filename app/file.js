// Placeholder for file.js content
import gspread
from oauth2client.service_account import ServiceAccountCredentials

scope = ["https://spreadsheets.google.com/feeds"]
creds = ServiceAccountCredentials.from_json_keyfile_name("creds.json", scope)
client = gspread.authorize(creds)

sheet = client.open("DataFlow").worksheet("Documents")

sheet.append_row([
    "d002", "001", "pdf", "research file", "summary", "2026-04-08"
])
https://spreadsheets.google.com/feeds
Category,Field,Value
App,Name,DataFlow
App,Version,1.0
App,Type,AI Document Engine
Feature,Text Input,Yes
Feature,PDF Upload,Yes
Feature,Image OCR,Yes
Feature,Video Transcription,Yes
Feature,Multi File Merge,Yes
Output,Product Brief,Yes
Output,Steps,Yes
Output,Workflow,Yes
Output,Presentation,Yes
Monetization,Free Plan,5/day
Monetization,Pro Plan,$12/month
const loadDocs = async () => {
  const res = await fetch("https://yourapi.com/admin/docs");
  const data = await res.json();
  setDocs(data);
};
@app.get("/admin/docs")
def get_docs():
    db = SessionLocal()
    docs = db.query(Document).all()
    db.close()
    return docs
sheet.append_row([
    "doc_" + os.urandom(3).hex(),
    "user_demo",
    "input",
    combined[:100],
    "ai_output",
    result[:200]
])
import gspread
from oauth2client.service_account import ServiceAccountCredentials

scope = [
    "https://spreadsheets.google.com/feeds",
    "https://www.googleapis.com/auth/drive"
]

creds = ServiceAccountCredentials.from_json_keyfile_name(
    "credentials.json", scope
)

client = gspread.authorize(creds)

sheet = client.open("DataFlow").worksheet("Documents")
@app.get("/admin/docs")
def get_docs():
    db = SessionLocal()
    docs = db.query(Document).all()
    db.close()
    return docs