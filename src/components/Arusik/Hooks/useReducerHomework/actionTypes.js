 // Ստեղծել կոճակներ որոնք կանեն հետևյալ գործողությունները
  // - Jsonplaceholder -ից կստանա 10 հատ post և կպահի `posts` զանգվածի մեջ և նկարել էջում
  // - Էջում պետք է ունենալ 1 input և այտեղ գրված անունը պետք է ավելացնել `developers` զանգվածի մեջ
  // - սորտաովրել arr զանգվածը։
  // - առաջին գործողությունով ստացած 10 հատ post-ի id-ը ջնջել և փոխարենը դնել arr զանգվածի 10 թվերը։
  // - ամեն մի post-ում լինի 'x' կոճակ և այն ՛click՛ի ժամանակ պիտի ջնջի հերթական post-ը,


// - Ամեն մի գործողությունից հետո(click) `actions` թվային հատկությունը ավելացնել 1 - ով։


export const GET_POSTS = 'GET_POSTS'
export const ADD_DEV_NAME = 'ADD_DEV_NAME'
export const SORT_ARR = 'SORT_ARR'
export const CHANGE_ID = 'CHANGE_ID'
export const DELETE_POST = 'DELETE_POST'