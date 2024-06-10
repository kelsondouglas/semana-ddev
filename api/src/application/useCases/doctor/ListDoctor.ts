import DatabaseService from "@/infra/DatabaseService";

export default class ListDoctorUseCase {
  constructor(readonly database: DatabaseService) {}

  execute() {}
}
