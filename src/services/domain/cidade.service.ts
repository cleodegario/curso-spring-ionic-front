import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { CidadeDTO } from "../../models/cidade.dto";
import { Observable } from "rxjs/Rx";
import { API_CONFIG } from "../../config/api.config";

@Injectable()
export class CidadeService{

    constructor(public http: HttpClient){

    }

    findAll(estadoId: string) : Observable<CidadeDTO[]> {
       return this.http.get<CidadeDTO[]>(`${API_CONFIG.baseURL}/estados/${estadoId}/cidades`);
    }

}