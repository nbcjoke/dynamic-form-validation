import api from "../api/config";

export class EntityService {
  static async getEntities() {
    return api.get("/getEntities");
  }

  static async createEntity(data) {
    return api.post("/createEntity", data);
  }

  static async changeEntity(id, data) {
    return api.put("/changeEntity", { id, ...data });
  }

  static async getEntity(entityId) {
    return api.get("/getEntity", {
      params: { entityId },
    });
  }
}
