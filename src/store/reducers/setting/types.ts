export interface SettingStateProps {
    timezone:string,
    theme:'day' | 'night',
    colorIconsEvent:IIconsEventColor,
    language:'en' | 'ru',
    font:'string',
    
}

export interface IIconsEventColor {
    weekend:string,
    holiday:string,
    myEvent:string
}