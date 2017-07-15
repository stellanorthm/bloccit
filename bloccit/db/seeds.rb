require 'random_data'

# Create Topics
 15.times do
   Topic.create!(
     name:         RandomData.random_sentence,
     description:  RandomData.random_paragraph
   )
 end
 topics = Topic.all

 # Create Posts
 50.times do
   Post.create!(
    topic:  topics.sample,
     title:  RandomData.random_sentence,
     body:   RandomData.random_paragraph
   )
 end
 posts = Post.all

 # Create Comments
 100.times do
   Comment.create!(
 # #4
     post: posts.sample,
     body: RandomData.random_paragraph
   )
 end

 # Create Questions
 100.times do
   Question.create!(
     title: RandomData.random_sentence,
     body: RandomData.random_paragraph,
     resolved: false
   )
 end



puts "#{Post.count}"
Post.find_or_create_by(title: "This title is unique", body: "This body is unique")
puts "#{Post.count}"

 puts "Seed finished"
 puts "#{Topic.count} topics created"
 puts "#{Post.count} posts created"
 puts "#{Comment.count} comments created"
 puts "#{Question.count} questions created"
