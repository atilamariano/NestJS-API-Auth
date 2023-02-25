import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import * as bcrypt from 'bcrypt';
import { UnauthorizedError } from './errors/unauthorized.error';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);

    if (user) {
      // checar se a senha informada correponde a hash que esta no bd

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        return {
          ...user,
          password: undefined,
        };
      }
    }

    // tratamento de erro de senha ou e-mail
    throw new UnauthorizedError(
      'E-mail address or password provided is incorrect.',
    );
  }
}
