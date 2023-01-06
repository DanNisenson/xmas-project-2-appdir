import axios from "axios";

export default class apiCalls {
  static async addHero(newHero) {
    try {
      const res = await axios.post("http://localhost:3003", newHero);
      return res.data;
    } catch (error) {
      throw new Error(error);
    }
  }
  
  static async editHero(newHero) {
    try {
      const res = await axios.patch(`http://localhost:3003/${newHero.id}`, newHero);
      return res.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async deleteHero(heroId) {
    try {
      const res = await axios.delete(`http://localhost:3003/${heroId}`);
      return res;
    } catch (error) {
      throw new Error(error);
    }
  }
}
