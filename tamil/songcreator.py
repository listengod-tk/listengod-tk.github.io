# Amplitude.init({
# 	continue_next: false,
# 	"songs": [
# 		{
# 			"name": "Chapter 1",
# 			"artist": "Lonetta",
# 			"album": "Assumptive Confidence",
# 			"url": "Chapter01.mp3",
# 			"cover_art_url": "AssumptiveConfidence.png"
# 		},
# 		{
# 			"name": "Chapter 5",
# 			"artist": "Lonetta",
# 			"album": "Assumptive Confidence",
# 			"url": "Chapter05.mp3",
# 			"cover_art_url": "AssumptiveConfidence.png"
# 		}
# 	]
# });
from shutil import copyfile
import os
import re
import json


chapters=['Genesis',
'Exodus ',
'Leviticus ',
'Numbers ',
'Deuteronomy ',
'Joshua ',
'Judges ',
'Ruth ',
'1Samuel ',
'2Samuel ',
'1Kings ',
'2Kings ',
'1Chronicles ',
'2Chronicles ',
'Ezra ',
'Nehemiah ',
'Esther ',
'Job ',
'Psalms',
'Proverbs ',
'Ecclesiastes ',
'SongofSolomon',
'Isaiah ',
'Jeremiah ',
'Lamentations ',
'Ezekiel ',
'Daniel ',
'Hosea ',
'Joel ',
'Amos ',
'Obadiah',
'Jonah ',
'Micah ',
'Nahum ',
'Habakkuk',
'Zephaniah',
'Haggai 	',
'Zechariah ',
'Malachi',
'Matthew ',
'Mark ',
'Luke ',
'John ',
'Acts ',
'Romans ',
'1Corinthians ',
'2Corinthians ',
'Galatians',
'Ephesians',
'Philippians',
'Colossians',
'1Thessalonians',
'2Thessalonians',
'1Timothy',
'2Timothy',
'Titus',
'Philemon',
'Hebrews ',
'James',
'1Peter',
'2Peter',
'1John',
'2John',
'3John',
'Jude',
'Revelation']

for i in ['01-50', '02-40', '03-27', '04-36', '05-34', '06-24', '07-21', '08-4', '09-31', '10-24', '11-22', '12-25', '13-29', '14-36', '15-10', '16-13', '17-10 ', '18-42', '19-150', '20-31', '21-12', '22-8 ', '23-66', '24-52', '25-5', '26-48', '27-12', '28-14', '29-3', '30-9', '31-1', '32-4', '33-7', '34-3', '35-3', '36-3', '37-2', '38-14', '39-4', '40-28', '41-16', '42-24', '43-21', '44-28', '45-16', '46-16', '47-13', '48-6', '49-6', '50-4', '51-4', '52-5', '53-3', '54-6', '55-4', '56-3', '57-1', '58-13', '59-5', '60-5', '61-3', '62-5', '63-1', '64-1', '65-1', '66-22']: 
	songs = []
	#copyfile("index.html",chapters[int(i.split('-')[0])-1].strip()+".html")
	with open("Amp.html","r") as r:
		filecontent = r.read()
		replacestring = filecontent.replace('myheading',chapters[int(i.split('-')[0])-1].strip()).replace('functions.js',chapters[int(i.split('-')[0])-1].strip()+'.js')
	
	with open(chapters[int(i.split('-')[0])-1].strip()+".html",'w') as f:
		f.write(replacestring)
	copyfile("functions.js",chapters[int(i.split('-')[0])-1].strip()+".js")
	for j in range(1,int(i.split('-')[1])+1): 
		data = {"name": chapters[int(i.split('-')[0])-1].strip()+" "+str(j),"album": chapters[int(i.split('-')[0])-1].strip(),"url": "https://tamilbible.s3.amazonaws.com/"+chapters[int(i.split('-')[0])-1].strip()+str(j)+'.mp3',"cover_art_url": "TamilIndex/"+str(int(i.split('-')[0]))+".png"}
		songs.append(json.dumps(data))
	#print(songs)
	with open(chapters[int(i.split('-')[0])-1].strip()+".js","a") as out:
		out.write('Amplitude.init({	continue_next: false,	"songs":'+str(songs).replace("'","")+"});")
	print('Amplitude.init({	continue_next: false,	"songs":'+str(songs)+"});" )


