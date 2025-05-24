import random 
import time    

def russian_roulette():
    print("Welcome to Russian Roulette!")
    print("There is 1 bullet in a 6-chamber gun.")
    print("Each time, you spin and pull the trigger.\n")
    while True:
        input("Press Enter to spin the chamber and pull the trigger...")
        print("Spinning the chamber...", end='')
        time.sleep(1) 
        print(" Done.")
        bullet = random.randint(1, 6)
        trigger = random.randint(1, 6)

        print("Pulling the trigger...")
        time.sleep(2)  

        if bullet == trigger:
            print("You are dead.")
            break 
        else:
            print("You are safe.\n")
        answer = input("Do you want to try again? (y/n): ")
        if answer != 'y' or answer != 'Y':
            print("You chose not to play again.")
            print("Good choice. Game over!")
            break 
russian_roulette()
