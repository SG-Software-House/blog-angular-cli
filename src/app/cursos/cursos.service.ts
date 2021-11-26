import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos() {
    return ["Técnico em Agiotatem", "Jogo do Bicho para iniciantes", "Como ganhar dinheiro com pirâmides"];
  }
}
