# Imports active directory module for running AD cmdlets
Import-Module ActiveDirectory

# 50 unique first names
$FirstName = @("Olivia", "Liam", "Emma", "Noah", "Amelia", "Oliver", "Ava", "Elijah", "Sophia", "Lucas", "Charlotte", "Levi", "Isabella", "Mason", "Mia", "Asher", "Luna", "James", "Harper", "Ethan", "Gianna", "Mateo", "Evelyn", "Leo", "Aria", "Jack", "Ella", "Benjamin", "Ellie", "Aiden", "Mila", "Logan", "Layla", "Grayson", "Avery", "Jackson", "Camila", "Henry", "Lily", "Wyatt", "Scarlett", "Sebastian", "Sofia", "Carter", "Nova", "Daniel", "Aurora", "William", "Chloe", "Alexander")

# 50 unique last names
$LastName = @("Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin", "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson", "Walker", "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores", "Green", "Adams", "Nelson", "Baker", "Hall", "Rivera", "Campbell", "Mitchell", "Carter", "Roberts")

$OUs = @("ou=Kuling_Admin,DC=sec,DC=core", "ou=Kuling_Admin,DC=sec,DC=core",
    "ou=Kuling_Gj_HR,ou=Kuling_Users,DC=sec,DC=core", "ou=Kuling_Gj_HR,ou=Kuling_Users,DC=sec,DC=core", "ou=Kuling_Gj_HR,ou=Kuling_Users,DC=sec,DC=core", "ou=Kuling_Gj_HR,ou=Kuling_Users,DC=sec,DC=core", "ou=Kuling_Gj_HR,ou=Kuling_Users,DC=sec,DC=core", "ou=Kuling_Gj_HR,ou=Kuling_Users,DC=sec,DC=core", "ou=Kuling_Gj_HR,ou=Kuling_Users,DC=sec,DC=core", "ou=Kuling_Gj_HR,ou=Kuling_Users,DC=sec,DC=core", "ou=Kuling_Gj_HR,ou=Kuling_Users,DC=sec,DC=core", "ou=Kuling_Gj_HR,ou=Kuling_Users,DC=sec,DC=core", "ou=Kuling_Gj_HR,ou=Kuling_Users,DC=sec,DC=core", "ou=Kuling_Gj_HR,ou=Kuling_Users,DC=sec,DC=core",
    "ou=Kuling_Gj_okonomi,ou=Kuling_Users,DC=sec,DC=core", "ou=Kuling_Gj_okonomi,ou=Kuling_Users,DC=sec,DC=core", "ou=Kuling_Gj_okonomi,ou=Kuling_Users,DC=sec,DC=core", "ou=Kuling_Gj_okonomi,ou=Kuling_Users,DC=sec,DC=core", "ou=Kuling_Gj_okonomi,ou=Kuling_Users,DC=sec,DC=core", "ou=Kuling_Gj_okonomi,ou=Kuling_Users,DC=sec,DC=core", "ou=Kuling_Gj_okonomi,ou=Kuling_Users,DC=sec,DC=core", "ou=Kuling_Gj_okonomi,ou=Kuling_Users,DC=sec,DC=core", "ou=Kuling_Gj_okonomi,ou=Kuling_Users,DC=sec,DC=core", "ou=Kuling_Gj_okonomi,ou=Kuling_Users,DC=sec,DC=core", "ou=Kuling_Gj_okonomi,ou=Kuling_Users,DC=sec,DC=core", "ou=Kuling_Gj_okonomi,ou=Kuling_Users,DC=sec,DC=core",
    "ou=Kuling_Gj_salg,ou=Kuling_Users,DC=sec,DC=core", "ou=Kuling_Gj_salg,ou=Kuling_Users,DC=sec,DC=core", "ou=Kuling_Gj_salg,ou=Kuling_Users,DC=sec,DC=core", "ou=Kuling_Gj_salg,ou=Kuling_Users,DC=sec,DC=core", "ou=Kuling_Gj_salg,ou=Kuling_Users,DC=sec,DC=core", "ou=Kuling_Gj_salg,ou=Kuling_Users,DC=sec,DC=core", "ou=Kuling_Gj_salg,ou=Kuling_Users,DC=sec,DC=core", "ou=Kuling_Gj_salg,ou=Kuling_Users,DC=sec,DC=core", "ou=Kuling_Gj_salg,ou=Kuling_Users,DC=sec,DC=core", "ou=Kuling_Gj_salg,ou=Kuling_Users,DC=sec,DC=core", "ou=Kuling_Gj_salg,ou=Kuling_Users,DC=sec,DC=core", "ou=Kuling_Gj_salg,ou=Kuling_Users,DC=sec,DC=core",
    "ou=Kuling_Gj_utvikling,ou=Kuling_Users,DC=sec,DC=core", "ou=Kuling_Gj_utvikling,ou=Kuling_Users,DC=sec,DC=core", "ou=Kuling_Gj_utvikling,ou=Kuling_Users,DC=sec,DC=core", "ou=Kuling_Gj_utvikling,ou=Kuling_Users,DC=sec,DC=core", "ou=Kuling_Gj_utvikling,ou=Kuling_Users,DC=sec,DC=core", "ou=Kuling_Gj_utvikling,ou=Kuling_Users,DC=sec,DC=core", "ou=Kuling_Gj_utvikling,ou=Kuling_Users,DC=sec,DC=core", "ou=Kuling_Gj_utvikling,ou=Kuling_Users,DC=sec,DC=core", "ou=Kuling_Gj_utvikling,ou=Kuling_Users,DC=sec,DC=core", "ou=Kuling_Gj_utvikling,ou=Kuling_Users,DC=sec,DC=core", "ou=Kuling_Gj_utvikling,ou=Kuling_Users,DC=sec,DC=core", "ou=Kuling_Gj_utvikling,ou=Kuling_Users,DC=sec,DC=core")

Write-Output "Username;Name;surName;Email;Path" > users.csv

# updates all variables and writes out each new user on csv file
#$UserList = @(Get-ADUser -Filter * | select)

foreach ($i in 0..49) {
    if (!($LastName[$i] -eq "Get-ADUser -Filter * | select -Property surName")) {
        $Name = $FirstName[$i]
        $surName = $LastName[$i]
        $Username = $FirstName[$i].substring(0, 1) + $LastName[$i].Tolower()
        $Email = ($Username + "@kulinger.com").Tolower()
        $Path = $OUs[$i]
        Write-Output "$Username;$Name;$surName;$Email;$Path" >> users.csv
    }
    else {
        $Name = $FirstName[$i]
        $surName = $LastName[$i]
        $Username = $FirstName[$i].substring(0, 2) + $LastName[$i].Tolower()
        $Email = ($Username + "@kulinger.com").Tolower()
        $Path = $OUs[$i]
        Write-Output "$Username;$Name;$surName;$Email;$Path" >> users.csv
    }
}
