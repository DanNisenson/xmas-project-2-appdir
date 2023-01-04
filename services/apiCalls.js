import axios from "axios";

export default class apiCalls {
  static async addHero(newHero) {
    try {
      const res = await axios.post("http://localhost:3003", newHero);
      // console.log(res);
      return res.data;
    } catch (error) {
      throw new Error(error);
    }
    
  }
  }