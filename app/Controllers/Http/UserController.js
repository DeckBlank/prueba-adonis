"use strict";
const User = use("App/Models/User");

class UserController {
  async login({ request, response, auth }) {
    const { email, password } = request.all();
    console.log(request.all());

    const token = await auth.attempt(email, password);

    return response.send(token);
  }

  async store({ request, response }) {
    const { username, email, password } = request.all();
    console.log(request.all());

    try {
      const user = await User.create({
        username,
        email,
        password,
      });

      return response.status(200).send(user);
    } catch (err) {
      return response.status(500).send(err);
    }
  }

  async getUsuarios() {
    return "trayendo los usuarios";
  }
}

module.exports = UserController;
