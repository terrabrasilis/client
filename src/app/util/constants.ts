/**
 * This class is responsible to store all global variables to use in entire application and not duplicate code
 */

const {get} = require('lodash')

export class Constants {
    public static get PROXY_OGC(): string { 
        return process.env.PROXY_OGC
    };

    public static get DASHBOARD_API_HOST(): string {
        return process.env.DASHBOARD_API_HOST 
    };

    public static get DASHBOARD_BIOMES_COLORS(): string[] {
        let listColors: string[] = ["#339966", "#ffcc00", "#ffff99", "#ff6600", "#33cccc", "#66ff33"];
        return listColors;
    };

    public static get DASHBOARD_BIOMES_NAMES(): string[] {
        let listNames: string[] = ["amazon", "atlantic", "caatinga", "cerrado", "pampa", "pantanal", "legal_amazon"];
        return listNames;
    };

    public static get DASHBOARD_CERRADO_DUPLICATED_YEARS(): number[] {
        let duplicatedYears: number[] = [2002, 2004, 2006, 2008, 2010, 2012];
        return duplicatedYears;
    };        

    public static get DASHBOARD_CERRADO_MAINTAINABLE_YEARS(): number[] {
        let maitanableYears: number[] = [2013, 2014, 2015, 2016, 2017, 2018];
        return maitanableYears;
    };

    public static get MAP_LEGEND_COLORS(): any[] {
        return ['#ffffcc', '#ffeda0', '#fed976', '#feb24c', '#fd8d3c', '#fc4e2a', '#e31a1c', '#bd0026', '#800026'];
    }

    public static get TERRABRASILIS_API_HOST(): string {
        return process.env.TERRABRASILIS_API_HOST 
    };    

    public static get MAP_LEGEND_GRADES(): number {
        return 8;
    };  
    
    public static get DASHBOARD_CERRADO_STATES(): any[] {
        return ['MATO GROSSO', 'MARANHÃO', 'PIAUÍ', 'BAHIA', 'MATO GROSSO DO SUL', 'GOIÁS', 'MINAS GERAIS', 'SÃO PAULO', 'PARANÁ', 'TOCANTINS', 'DISTRITO FEDERAL'];
    };  

    public static get DASHBOARD_AMAZON_STATES(): any[] {
        return ['PARÁ', 'AMAZONAS', 'RORAIMA', 'ACRE', 'MATO GROSSO', 'RONDÔNIA', 'AMAPÁ', 'MARANHÃO', 'TOCANTINS'];
    };  

    public static get DASHBOARD_LEGAL_AMAZON_STATES(): any[] {
        return ['PARÁ', 'AMAZONAS', 'RORAIMA', 'ACRE', 'MATO GROSSO', 'RONDÔNIA', 'AMAPÁ', 'MARANHÃO', 'TOCANTINS'];
    };  
    
    public static get TERRABRASILIS_BUSINESS_API_HOST(): string {
        return process.env.TERRABRASILIS_BUSINESS_API_HOST 
    };
}
