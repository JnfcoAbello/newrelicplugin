# NGX-Newrelic 
Library for angular 2+.

## Current Version
**0.0.4** - 02/08/2021

## Installation

    npm i ngx-newrelic

## Documentation
This plugin has a service that allow call to new-relic api.

### method:

    newRelicLog (params:IParams): Promise<any>{....}
    Async newRelicLogAsync (params:IParams): Promise<any>{....}

   IParams is an interface that belongs:
   
    {
     licenseKey: string,
     message: string,
     optional?: Map<string,any>
     headers?: Map<string,any>
    }

 - **licenseKey**: Field 'required' of api account.
 - **message** : Field 'requeried' in new relic that allow to show in message list in the platform.
 - **optional** (Optional): Aditional information in logs.
 - **headers** (Optional) : Aditional headers in requests.

## Repository
[Click go to reposotory](https://github.com/JnfcoAbello/ngx-newrelic)