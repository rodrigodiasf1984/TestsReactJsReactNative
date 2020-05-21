export function addTech(tech){
  return {
    type: 'ADD_TECH',
    payload:{tech}
  }
}

export function getTechSuccess(data){
  return {
    type: 'GET_TECHS_SUCCESS',
    payload: {data}
  }
}

export function getTechFailure(){
  return {
    type: 'GET_TECHS_FAILURE',
  }
}