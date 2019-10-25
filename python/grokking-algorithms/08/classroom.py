# Pick classes as many as possible
# 1. Pick the class that ends the soonet. This is the first class you will hold.
# 2. Now, you need to pick a class that starts after the first class. Again, Pick the
#    class that ends the soonet.

CLASS_SCHEDULE = [
    {"class": "ART", "START": 900, "END": 1000},
    {"class": "ENG", "START": 930, "END": 1030},
    {"class": "MATH", "START": 1000, "END": 1100},
    {"class": "CS", "START": 1030, "END": 1130},
    {"class": "MUSIC", "START": 1100, "END": 1200},
]

schedules = []

start = 0
end = float("inf")
while True:
    soonest = None
    for schedule in CLASS_SCHEDULE:
        if end > schedule["END"] and start <= schedule["START"]:
            end = schedule["END"]
            soonest = schedule
    if soonest:
        schedules.append(soonest)
        start = soonest["END"]
        end = float("inf")
    else:
        break

print([el["class"] for el in schedules])
