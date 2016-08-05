'use strict'
const UserEntity = require('./UserEntity')
const UserDTO = require('./UserDTO')

class UserMapper {
  constructor () {}

  toEntity (usrDto) {
    return new UserEntity(usrDto.matricule, usrDto.nom, usrDto.prenom, usrDto._id)
  }

  toDTO (usrEntity) {
    return new UserDTO(usrEntity.matricule, usrEntity.nom, usrEntity.prenom, usrEntity._id)
  }
}

module.exports = UserMapper
