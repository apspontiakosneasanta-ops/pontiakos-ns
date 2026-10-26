# Ρύθμιση ασφαλούς σύνδεσης διαχειριστών

## Σημαντικό
Η σύνδεση δεν είναι ενεργή μέχρι να ολοκληρωθούν τα βήματα στο Supabase. Μην θεωρήσεις τον ιστότοπο έτοιμο πριν τις δοκιμές.

## 1. Δημιούργησε το Supabase project
1. Το project έχει ήδη δοθεί: https://supabase.com/dashboard/project/ffckdukdiohmawxurjwu
2. Το Project URL έχει συμπληρωθεί στο js/supabase-config.js.
3. Από Project Settings > API, αντέγραψε το publishable key (ή το anon key του project) και βάλε το στη μεταβλητή SUPABASE_PUBLISHABLE_KEY.
4. Ποτέ μη βάλεις secret key ή service_role key σε αρχεία του GitHub.

## 2. Δημιούργησε λογαριασμό διαχειριστή
1. Στο Supabase Dashboard άνοιξε Authentication > Users.
2. Δημιούργησε τον λογαριασμό διαχειριστή και επιβεβαίωσε το email σύμφωνα με τις ρυθμίσεις του project.
3. Απενεργοποίησε τη δημόσια εγγραφή χρηστών στις ρυθμίσεις Authentication, όπου διατίθεται.
4. Αντέγραψε το User ID (UUID) του λογαριασμού.

## 3. Ρύθμισε τον πίνακα διαχειριστών
1. Άνοιξε SQL Editor στο Supabase.
2. Εκτέλεσε το περιεχόμενο του supabase/admin_users.sql.
3. Αντικατάστησε το UUID στο παράδειγμα INSERT με το User ID του διαχειριστή και εκτέλεσε το INSERT.
4. Για επιπλέον διαχειριστές, δημιούργησε τους λογαριασμούς από το Dashboard και πρόσθεσε τα User ID τους με τον ίδιο τρόπο.

## 4. Ρύθμισε URL και δοκιμές
1. Στο Authentication > URL Configuration πρόσθεσε το πραγματικό URL του GitHub Pages ως Site URL / επιτρεπόμενο redirect URL. Συνήθως έχει μορφή https://apspontiakosneasanta-ops.github.io/pontiakos-ns/.
2. Περίμενε να δημοσιευτούν οι αλλαγές του GitHub Pages.
3. Δοκίμασε σωστό κωδικό με διαχειριστή, λάθος κωδικό και λογαριασμό που δεν υπάρχει στον admin_users.
4. Κάθε νέος πίνακας με δεδομένα διαχείρισης χρειάζεται RLS και κατάλληλες πολιτικές.

## Αρχεία
- login.html: φόρμα σύνδεσης.
- admin.html: αρχικός πίνακας με έλεγχο διαχειριστή και αποσύνδεση.
- js/auth.js: κοινός κώδικας Supabase και έλεγχος δικαιωμάτων.
- js/supabase-config.js: δημόσια στοιχεία σύνδεσης Supabase.
- supabase/admin_users.sql: πίνακας και πολιτική RLS.
