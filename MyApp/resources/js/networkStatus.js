function activeConnection() {
    var networkState = navigator.network.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = false;
    states[Connection.ETHERNET] = true;
    states[Connection.WIFI]     = true;
    states[Connection.CELL_2G]  = true;
    states[Connection.CELL_3G]  = true;
    states[Connection.CELL_4G]  = true;
    states[Connection.NONE]     = false;

    return states[networkState];
}