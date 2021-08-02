import { Injectable } from '@angular/core';
import { IParams } from './newrelic-params.interface';

@Injectable({
  providedIn: 'root'
})
export class NgxNewrelicService {

  constructor() { }

  /**
   * @param params Type of IParams
   * @returns Response of http Request
   * @author Juan Abello
   * @author Patricio Quezada
   */
  public newRelicTest (params:IParams): Promise<any> {
    const date = Date.now();
    const headers = new Headers({
        "Content-Type": "application/json",
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers':'*',
        'pragma':'no-cache',
        'Cache-Control': 'private, no-store, no-cache',
        "X-License-Key": params.licenseKey,
    });
    let result = !!params.optional? Array.from(params.optional.entries()).reduce((acc, [key, value]) => ({...acc, [key]: value}), {}): {};
    const msg =!params.message ? '' : ( String(params.message).trim().length > 255 ?  String(params.message).trim().substring(0,255) : String(params.message).trim());
    const requiredParams = {
        "datetime.date": new Date(date).toDateString(),
        "datetime.timezone": "UTC",
        "datetime.timezone_type": 3,
        "message": msg,
        "timestamp": date,
    };
    const body = Object.assign(requiredParams,result);
    return fetch('https://log-api.newrelic.com/log/v1',{
      method: 'POST',
      body: JSON.stringify(body),
      headers:headers
    })
}
}
