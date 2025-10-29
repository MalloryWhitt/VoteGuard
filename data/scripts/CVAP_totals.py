import csv

input_file = "../raw/CVAP_data.csv"
output_file = "../processed/cvap_totals.csv"

excluded = {"District of Columbia", "Puerto Rico"}

with open(input_file, newline='', encoding='utf-8-sig') as infile:
    reader = csv.DictReader(infile)
    filtered_rows = []

    for row in reader:
        if row.get('lntitle', '').strip().lower() == 'total':
            state_name = row.get('geoname').strip()
            if state_name not in excluded:
                filtered_rows.append({
                    'state': state_name,
                    'total': row.get('tot_est')
                })

with open(output_file, 'w', newline='', encoding='utf-8') as outfile:
    fieldnames = ['state', 'total']
    writer = csv.DictWriter(outfile, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(filtered_rows)

print(f"Filtered data written to: {output_file}")

