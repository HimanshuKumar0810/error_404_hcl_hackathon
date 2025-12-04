# Healthcare Wellness & Preventive Care Portal (MVP)

A secure, full-stack web application designed to help patients manage wellness goals and preventive care compliance, while providing healthcare providers with tools to monitor patient progress.

**Scope:** 5-Hour MVP  
**Stack:** MERN (MongoDB, Express, React, Node.js)

## 📋 Table of Contents
1. [Key Features](#-key-features)
2. [Tech Stack](#-tech-stack)
3. [Security & Compliance](#-security--compliance)
4. [Project Structure](#-project-structure)
5. [Installation & Setup](#-installation--setup)
6. [API Endpoints](#-api-endpoints)

---

## 🌟 Key Features

### Patient Portal
*   **Dashboard:** Visual tracking of wellness goals (Steps, Sleep, Water) matching mock designs.
*   **Preventive Care:** Reminders for upcoming checkups (e.g., Annual Blood Test).
*   **Profile Management:** View allergies and medication data.
*   **Health Tips:** Daily dynamic health tips.

### Healthcare Provider Portal
*   **Patient Oversight:** List view of assigned patients.
*   **Compliance Tracking:** Visual indicators of whether patients are meeting their wellness goals.

### Public Interface
*   **Info Hub:** Static health information regarding COVID-19, Flu prevention, etc.

---

## 🛠 Tech Stack

*   **Frontend:** React.js, React Router v6, CSS (Custom styling based on mocks).
*   **Backend:** Node.js, Express.js.
*   **Database:** MongoDB (using Mongoose ODM).
*   **Authentication:** JWT (JSON Web Tokens) & Bcrypt.js.
*   **Security:** Helmet (HTTP Headers), CORS, Input Validation.

---

## 🔒 Security & Compliance

This MVP prioritizes **HIPAA-aligned security measures** as per the problem statement:

1.  **Role-Based Access Control (RBAC):** Strict separation between `patient` and `provider` data access.
2.  **Audit Logging:** Every critical action (Login, Data Access) is logged to the database with a timestamp and User ID for accountability.
3.  **Data Consent:** Registration requires explicit boolean consent for data usage.
4.  **Encryption:** Passwords are hashed using `bcrypt` before storage.
5.  **Secure Headers:** Implemented `helmet` middleware to set secure HTTP headers.

---

## 📂 Project Structure

```bash
┌────────────────────────┐
                         │     Public Website      │
                         │ (Health Info + Login)   │
                         └───────────┬────────────┘
                                     │
                           Choose Role: Patient / Provider
                                     │
                                     v
                     ┌──────────────────────────────────┐
                     │           User Login              │
                     │ (POST /api/auth/login -> JWT)    │
                     └───────────┬──────────────────────┘
                                 │   JWT Issued
                                 v
                   ┌──────────────────────────────────┐
                   │      React Router (RBAC)         │
                   │ Checks: Auth + Role + Token       │
                   └───────────┬───────────────┬──────┘
                               │               │
                               │               │
                     PATIENT ROLE        PROVIDER ROLE
                               │               │
                               v               v
          ┌──────────────────────────┐  ┌────────────────────────────┐
          │     Patient Dashboard    │  │     Provider Dashboard      │
          │ GET /patient/goals       │  │ GET /provider/patients      │
          │ GET /patient/preventive  │  │ (Assigned Patients)         │
          └─────────────┬────────────┘  └─────────────┬──────────────┘
                        │                               │
                        v                               v
        ┌────────────────────────────────┐   ┌─────────────────────────┐
        │  Backend (Node + Express)      │   │ View Patient Details     │
        │ - JWT Verify Middleware        │   │ GET /provider/patient/:id│
        │ - Role-Based Access Control    │   └───────────────┬─────────┘
        │ - Audit Logging                │                   │
        └───────────────┬────────────────┘                   v
                        │                          ┌──────────────────────┐
                        v                          │  MongoDB (Database)   │
       ┌─────────────────────────────────┐         │ - Users               │
       │ MongoDB Queries                 │         │ - Patient Goals       │
       │ - Fetch Goals                   │         │ - Preventive Care     │
       │ - Fetch Reminders               │         │ - Audit Logs          │
       │ - Fetch Medications             │         └──────────────────────┘
       └─────────────────┬──────────────┘
                         │
                         v
            ┌─────────────────────────────┐
            │  Response Sent to Frontend  │
            │ (JSON → Rendered in React)  │
            └─────────────────────────────┘
