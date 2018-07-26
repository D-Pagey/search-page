# Your task will be to build our *Search Page*!

The page can be found at https://www.joindrover.com/cars/search and there are 2 
versions of it (Consumer, Private-Hire) with very small differences between the 
two.

----
 
#### 1. Basic

- [x] Setup an app that calls our API to get vehicles for one vehicle type
- [x] Display vehicles in a list/table to the user with relevant data (eg: make, 
model, year, color, price - see notes)
- [x] Allow at least 2 fields (location is required) in search to be user inputted 
(submit button? automatic?)
- [x] *Bonus:* add some styling

#### 2. Keep going

- [ ] Add all fields able to search by for one vehicle type (please see live website)
- [ ] Write unit/snapshot tests for most if not all components
- [x] Add styling to make it look like https://www.joindrover.com/cars/search
- [ ] *Bonus:* add functionality for pagination

#### 3. All out!

- [ ] Search can search for both types of vehicles (Consumer & Private-Hire aka PCO)
- [ ] Unless already done, Pagination!!
- [x] Styling as close to original as possible
- [ ] Fully responsive
- [ ] *Bonus:* add google autocomplete to the location in the search filters

---- 

**Getting Started:**
 1. Run: `yarn`
 2. Run: `yarn start`
 3. Go to: `http://localhost:3000/`

---- 

#### Notes

I plan to continue working on this task to as close to an **All out!** standard 
as possible. I've built a version that displays live data for a generic request. 
I decided to go with a mobile first design and so have only built the app for 
320px so far. With more time I would like to implement the following:

* Redux
* BEM CSS
* More unit tests
* The cool menu in the navbar
* The various "To Do" comments in the code