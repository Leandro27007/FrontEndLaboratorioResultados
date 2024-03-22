import { Injectable } from '@angular/core';
import { BaseHttpService } from './baseHttpService';
import { HttpClient } from '@angular/common/http';
import { BaseResponse } from '../../models/response/baseResponse';
import { ResultadoRequest } from '../../models/request/resultadoRequest';
import { ResultadoResponse } from '../../models/response/resultadoResponse';


@Injectable({
    providedIn: 'root'
})

export class ResultadoService extends BaseHttpService<ResultadoRequest, BaseResponse<ResultadoResponse[]>>{

    override getResourceUrl(): string {
        return 'Resultado/ObtenerResultados'
    }

}
