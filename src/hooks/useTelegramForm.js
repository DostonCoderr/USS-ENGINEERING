// src/hooks/useTelegramForm.js
import { useState } from "react";
import { sendToTelegram } from "../lib/telegram";
import { useTranslation } from "react-i18next";

export const useTelegramForm = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError("");

    const result = await sendToTelegram(formData);

    if (result.success) {
      setSuccess(true);
      setFormData({ name: "", phone: "", message: "" });
      setTimeout(() => setSuccess(false), 5000);
    } else {
      setError(t("contact.form.error") || "Xabar yuborishda xato yuz berdi");
    }
    setLoading(false);
  };

  return {
    formData,
    handleChange,
    handleSubmit,
    loading,
    success,
    error,
  };
};