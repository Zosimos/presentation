function info(){
    document.getElementById("petsalon-info").innerHTML=`
    <p>Welcome to ${petSalon.name} located in ${petSalon.address.street} ${petSalon.address.number} ${petSalon.address.zip}.</p>
    `;
}
function initInfo(){
    info();
}
window.onload=initInfo;