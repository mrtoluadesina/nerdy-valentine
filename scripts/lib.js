export const nerdyValUUID = () => {
  return "xxxxxx-xxxx-4xxx-yxxx-xxxxxxxxx".replace(/[xy]/g, function(c) {
    const r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const loveAuth = () => {
  const authHash = [
    ...Array(3)
      .fill(0)
      .map(_ =>
        Math.random()
          .toString(16)
          .substring(2, 15)
      )
  ].join("-");

  let auth = "";

  for (let index = 0; index < authHash.length; index++) {
    const char = authHash[index];
    const randomCaps = Math.floor(Math.random() * 2);
    auth += randomCaps ? char.toUpperCase() : char.toLowerCase();
  }
  return auth;
};

export const nerdyResponse = payload => {
  const currentDateTime = new Date().toUTCString();

  const response = {
    nerdyCardId: payload.nerdyCardId,
    api_version: payload.apiVersion,
    body: payload.body,
    date_created: payload.successful ? currentDateTime : null,
    date_sent: payload.successful ? currentDateTime : null,
    date_updated: payload.successful ? currentDateTime : null,
    error_code: payload.error ? currentDateTime : null,
    error_message: payload.error ? currentDateTime : null,
    from: payload.from,
    messaging_service_sid: nerdyValUUID(),
    id: nerdyValUUID(),
    status: payload.successful ? "sent" : "failed",
    to: payload.to
  };

  return response;
};
