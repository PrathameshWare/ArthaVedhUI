import React, { useState } from "react";

export default function AlertModal({ showModal, onClose }) {
  const [activeTab, setActiveTab] = useState("settings");
  const [condition, setCondition] = useState("Crossing");
  const [price, setPrice] = useState("226.05");
  const [trigger, setTrigger] = useState("onlyOnce");
  const [expiration, setExpiration] = useState("2024-09-17T11:56");
  const [alertName, setAlertName] = useState("");
  const [message, setMessage] = useState("");
  const [newSelectValue, setNewSelectValue] = useState("Option1");

  const [notifyInApp, setNotifyInApp] = useState(true);
  const [showToast, setShowToast] = useState(true);
  const [sendEmail, setSendEmail] = useState(false);
  const [webhookUrl, setWebhookUrl] = useState(false);
  const [playSound, setPlaySound] = useState(false);
  const [sendPlainText, setSendPlainText] = useState(false);

  const countCheckedNotifications = () => [
    notifyInApp, showToast, sendEmail, webhookUrl, playSound, sendPlainText,
  ].filter(Boolean).length;

  const renderSettingsTab = () => (
    <>
      <div className="flex mb-1">
        <label className="w-1/3 text-white text-sm font-semibold">Condition</label>
        <select
          value={newSelectValue}
          onChange={(e) => setNewSelectValue(e.target.value)}
          className="w-2/3 p-2 bg-slate-600 text-white border rounded focus:outline-none"
        >
          <option value="Option1">Option 1</option>
          <option value="Option2">Option 2</option>
          <option value="Option3">Option 3</option>
        </select>
      </div>

      <div className="flex mb-2">
        <label className="w-1/3"></label>
        <select
          value={condition}
          onChange={(e) => setCondition(e.target.value)}
          className="w-2/3 p-2 bg-transparent text-white border rounded focus:outline-none"
        >
          <option value="Crossing">Crossing</option>
        </select>
      </div>

      <div className="flex mb-2">
        <label className="w-1/3"></label>
        <input
          type="text"
          disabled
          placeholder="Price"
          className="w-1/3 p-2 mr-1 bg-gray-700 text-white border rounded focus:outline-none"
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-1/3 p-2 bg-transparent text-white border rounded focus:outline-none"
        />
      </div>

      <div className="flex mb-2">
        <label className="w-1/3 text-white text-sm font-semibold">Trigger</label>
        <div className="w-2/3">
          <label className="text-white mr-4">
            <input
              type="radio"
              value="onlyOnce"
              checked={trigger === "onlyOnce"}
              onChange={(e) => setTrigger(e.target.value)}
              className="mr-1"
            />
            Only Once
          </label>
          <label className="text-white">
            <input
              type="radio"
              value="everyTime"
              checked={trigger === "everyTime"}
              onChange={(e) => setTrigger(e.target.value)}
              className="mr-1"
            />
            Every Time
          </label>
        </div>
      </div>

      <div className="flex mb-2">
        <div className="w-1/3"></div>
        <div className="w-2/3">
          {trigger === "onlyOnce" && (
            <p className="text-red-500 mb-2">
              The alert will trigger only once and will not be repeated
            </p>
          )}
          {trigger === "everyTime" && (
            <p className="text-red-500 mb-2">
              The alert will trigger every time the condition is met, but not more than once per minute
            </p>
          )}
        </div>
      </div>

      <div className="flex mb-2">
        <label className="w-1/3 text-white text-sm font-semibold">Expiration</label>
        <input
          type="datetime-local"
          value={expiration}
          onChange={(e) => setExpiration(e.target.value)}
          className="w-2/3 p-2 bg-transparent text-white border rounded focus:outline-none"
        />
      </div>

      <div className="flex mb-2">
        <label className="w-1/3 text-white text-sm font-semibold">Alert Name</label>
        <input
          type="text"
          value={alertName}
          onChange={(e) => setAlertName(e.target.value)}
          className="w-2/3 p-2 bg-transparent text-white border rounded focus:outline-none"
        />
      </div>

      <div className="flex mb-2">
        <label className="w-1/3 text-white text-sm font-semibold">Message</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-2/3 p-2 bg-transparent text-white border rounded focus:outline-none"
        />
      </div>
    </>
  );

  const renderNotificationsTab = () => (
    <>
      {[["Notify in app", notifyInApp, setNotifyInApp, "Provides a push notification in the mobile app."],
        ["Show toast notification", showToast, setShowToast, "Displays an onsite notification in the page corner."],
        ["Send email", sendEmail, setSendEmail, "Provides an email notification to the address specified in your profile settings."],
        ["Webhook URL", webhookUrl, setWebhookUrl, "Sends a POST request to your specified URL when your alert triggers."],
        ["Play sound", playSound, setPlaySound, "Plays an audio when your alert triggers."],
        ["Send plain text", sendPlainText, setSendPlainText, "Sends plain text to an alternative email."]].map(([label, state, setState, desc]) => (
        <div key={label} className="flex items-start mb-6">
          <input
            type="checkbox"
            checked={state}
            onChange={() => setState(!state)}
            className="mr-2 mt-1.5"
          />
          <div className="flex flex-col">
            <label className="text-white text-sm font-semibold mb-1">{label}</label>
            <span className="text-white text-xs">{desc}</span>
          </div>
        </div>
      ))}
    </>
  );

  return showModal ? (
    <>
      <div className="flex justify-center items-center fixed inset-0 z-50">
        <div className="relative my-6 mx-auto bg-gray-600 rounded-lg" style={{ width: '500px' }}>
          <div className="relative flex flex-col w-full h-full bg-gray-600 rounded-lg">
            <div className="flex items-center justify-between p-4 border-b border-slate-200">
              <h3 className="text-lg font-semibold text-white">Alert Modal</h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-white opacity-7 text-3xl font-semibold"
                onClick={onClose}
              >
                <span className="text-white h-6 w-6 text-2xl">×</span>
              </button>
            </div>
            <div className="relative p-6 flex-auto">
              <div className="flex border-b border-gray-500 mb-4">
                <button
                  onClick={() => setActiveTab("settings")}
                  className={`flex-1 py-2 text-center ${activeTab === "settings" ? "bg-gray-700" : "bg-gray-600"} text-white`}
                >
                  Settings
                </button>
                <button
                  onClick={() => setActiveTab("notifications")}
                  className={`flex-1 py-2 text-center ${activeTab === "notifications" ? "bg-gray-700" : "bg-gray-600"} text-white flex items-center justify-center`}
                >
                  Notifications
                  <span className="ml-2 flex items-center justify-center w-6 h-6 bg-blue-500 text-white text-xs rounded-full">
                    {countCheckedNotifications()}
                  </span>
                </button>
              </div>
              {activeTab === "settings" ? renderSettingsTab() : renderNotificationsTab()}
            </div>
            <div className="flex items-center justify-end p-6 border-t border-slate-200">
              <button className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 mr-4" onClick={onClose}>
                Cancel
              </button>
              <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
                Create Alert
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
    </>
  ) : null;
}
