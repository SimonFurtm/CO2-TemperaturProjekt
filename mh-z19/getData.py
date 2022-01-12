import csv
import json
from re import template
import sys
import os
from datetime import datetime
from time import sleep

import dht11
import RPi.GPIO as GPIO

import mh_z19 as co2


value = co2.read(True) #args.serial_console_untouched)
# initialize GPIO
GPIO.setwarnings(False)
GPIO.setmode(GPIO.BCM)
GPIO.cleanup()

# read data using pin 14
instance = dht11.DHT11(pin = 4)
result = instance.read()

# storing current date and time 
current_date = datetime.now().strftime('%Y%m%d')
current_time = datetime.now().strftime('%H%M%S')

check=0

while check <= 10:
    if(result.is_valid()!=True):
        result = instance.read()
    if(value is None):
        value = co2.read(True)
    if(result.is_valid() and value is not None):
        check=11
    else:  sleep(2)

    print("CO2_Read: %s" % value)
    print(json.dumps({'Temperature': result.temperature,'Humidity': result.humidity }))
    check+=1
    if(check == 10):
        sys.exit(1)

data = [
    [current_date],
    [current_time],
    [value.get('co2')],
    [result.temperature],
    [result.humidity]
]
print(data[0])

with open('messwerte.csv', 'a') as file:
    writer = csv.writer(file)

    for row in data:
        writer.writerow(row)
file.close()