import { Doctor, DoctorSchema } from "./doctor.model.js";
import { Patient, PatientSchema } from "./patient.model.js";
import {
  MedicalHistory,
  MedicalHistorySchema,
} from "./medicalhistory.model.js";
import { Examination, ExaminationSchema } from "./examination.model.js";
import { Consultation, ConsultationSchema } from "./consultation.model.js";
import { Appointment, AppointmentSchema } from "./appointment.model.js";
export default function setupModels(sequelize) {
  Doctor.init(DoctorSchema, Doctor.config(sequelize));
  Patient.init(PatientSchema, Patient.config(sequelize));
  MedicalHistory.init(MedicalHistorySchema, MedicalHistory.config(sequelize));
  Examination.init(ExaminationSchema, Examination.config(sequelize));
  Consultation.init(ConsultationSchema, Consultation.config(sequelize));
  Appointment.init(AppointmentSchema, Appointment.config(sequelize));
}
