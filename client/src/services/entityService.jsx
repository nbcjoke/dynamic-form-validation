import api from "../api/config";

export class EntityService {
  static async getEntities() {
    return api.get("/getEntities");
  }
}
