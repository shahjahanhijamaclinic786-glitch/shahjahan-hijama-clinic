/**
 * Shahjahan Hijama Clinic — booking endpoint (Google Apps Script Web App).
 *
 * Setup:
 * 1. Create a Google Sheet. Put its ID in SHEET_ID below (or use the bound sheet).
 * 2. Extensions → Apps Script, paste this file.
 * 3. Deploy → New deployment → Web app.
 *      Execute as: Me
 *      Who has access: Anyone
 * 4. Copy the /exec URL into the site's BOOKING_ENDPOINT_URL env var (server-side only).
 *
 * The site posts JSON. This appends a row and emails the clinic.
 * Nothing here is committed with real IDs or the deployment URL.
 */

var SHEET_ID = ""; // optional; leave blank to use the container-bound spreadsheet
var SHEET_NAME = "Requests";
var NOTIFY_EMAIL = "shahjahanhijamaclinic786@gmail.com";

var HEADERS = [
  "Timestamp", "Full Name", "WhatsApp", "Email", "Service", "Clinic/Home",
  "Location", "Home Address", "Preferred Date", "Preferred Time",
  "Preferred Practitioner", "Concern/Message", "Source/UTM", "Page URL",
];

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var ss = SHEET_ID ? SpreadsheetApp.openById(SHEET_ID) : SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow(HEADERS);
    }

    var row = [
      data.timestamp || new Date().toISOString(),
      data.fullName || "",
      data.whatsapp || "",
      data.email || "",
      data.service || "",
      data.mode || "",
      data.location || "",
      data.homeAddress || "",
      data.date || "",
      data.time || "",
      data.practitioner || "",
      data.message || "",
      data.source || "",
      data.pageUrl || "",
    ];
    sheet.appendRow(row);

    sendNotification_(data);

    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

function doGet() {
  return json_({ ok: true, status: "ready" });
}

function sendNotification_(d) {
  var subject = "New Appointment Request — " + (d.fullName || "Unknown");
  var body =
    "NEW APPOINTMENT REQUEST\n\n" +
    "Name: " + (d.fullName || "") + "\n" +
    "WhatsApp: " + (d.whatsapp || "") + "\n" +
    "Email: " + (d.email || "Not Provided") + "\n\n" +
    "Service: " + (d.service || "") + "\n" +
    "Location: " + (d.mode === "Home Service" ? "Home Service" : (d.location || "")) + "\n" +
    "Home Address: " + (d.homeAddress || "-") + "\n" +
    "Preferred Date: " + (d.date || "") + "\n" +
    "Preferred Time: " + (d.time || "") + "\n" +
    "Preferred Practitioner: " + (d.practitioner || "") + "\n\n" +
    "Concern / Message:\n" + (d.message || "-") + "\n\n" +
    "Submitted from the Shahjahan Hijama Clinic website.\n" +
    "Appointment is not automatically confirmed.";
  MailApp.sendEmail(d.notifyEmail || NOTIFY_EMAIL, subject, body);
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
