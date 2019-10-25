states_needed = set(["mt", "wa", "or", "id", "nv", "ut", "ca", "az"])

stations = {}
stations["knone"] = set(["id", "nv", "ut"])
stations["ktwo"] = set(["wa", "id", "mt"])
stations["kthree"] = set(["or", "nv", "ca"])
stations["kfour"] = set(["nv", "ut"])
stations["kfive"] = set(["ca", "az"])

picked_stations = set()

while states_needed:
    most_covered = None
    cover_count = len(states_needed)
    for station, states in stations.items():
        count = len(states_needed - states)
        if count < cover_count and station not in picked_stations:
            cover_count = count
            most_covered = station

    picked_stations.add(most_covered)
    states_needed -= stations[most_covered]

print(picked_stations)
